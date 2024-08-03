import { type Readable, derived, writable } from 'svelte/store';

import { api } from '@mathesar/api/rpc';
import type { Database } from '@mathesar/api/rpc/databases';
import { preloadCommonData } from '@mathesar/utils/preloadData';
import type { MakeWritablePropertiesReadable } from '@mathesar/utils/typeUtils';
import {
  ImmutableMap,
  WritableMap,
  defined,
} from '@mathesar-component-library';

const commonData = preloadCommonData();

function sortDatabases(c: Iterable<Database>): Database[] {
  return [...c].sort((a, b) => a.name.localeCompare(b.name));
}

class DatabasesStore {
  private readonly unsortedDatabases = new WritableMap<
    Database['id'],
    Database
  >();

  readonly databases: Readable<ImmutableMap<Database['id'], Database>>;

  readonly currentDatabaseId = writable<Database['id'] | undefined>();

  readonly currentDatabase: Readable<Database | undefined>;

  constructor() {
    this.unsortedDatabases.reconstruct(
      commonData.databases.map((d) => [d.id, d]),
    );
    this.databases = derived(
      this.unsortedDatabases,
      (ud) =>
        new ImmutableMap(sortDatabases(ud.values()).map((d) => [d.id, d])),
    );
    this.currentDatabaseId.set(commonData.current_database ?? undefined);
    this.currentDatabase = derived(
      [this.databases, this.currentDatabaseId],
      ([databases, id]) => defined(id, (v) => databases.get(v)),
    );
  }

  private addDatabase(database: Database) {
    this.unsortedDatabases.set(database.id, database);
  }

  async connectExistingDatabase(
    props: Parameters<typeof api.database_setup.connect_existing>[0],
  ) {
    const { database } = await api.database_setup.connect_existing(props).run();
    this.addDatabase(database);
    return database;
  }

  async createNewDatabase(
    props: Parameters<typeof api.database_setup.create_new>[0],
  ) {
    const { database } = await api.database_setup.create_new(props).run();
    this.addDatabase(database);
    return database;
  }

  setCurrentDatabaseId(databaseId: Database['id']) {
    this.currentDatabaseId.set(databaseId);
  }

  clearCurrentDatabaseId() {
    this.currentDatabaseId.set(undefined);
  }
}

export const databasesStore: MakeWritablePropertiesReadable<DatabasesStore> =
  new DatabasesStore();

/** ⚠️ This readable store contains a type assertion designed to sacrifice type
 * safety for the benefit of convenience.
 *
 * We need to access `currentDatabase` like EVERYWHERE throughout the app, and
 * we'd like to avoid checking if it's defined every time. So we assert that it
 * is defined, and we'll just have to be careful to **never use the value from
 * this store within a context where no database is set.**
 */
export const currentDatabase =
  databasesStore.currentDatabase as Readable<Database>;
