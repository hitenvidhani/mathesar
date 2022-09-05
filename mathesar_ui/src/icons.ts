import {
  faAlignLeft,
  faArrowLeft,
  faArrowRight,
  faBackspace,
  faCalendarDay,
  faCalendarWeek,
  faCheckSquare,
  faChevronRight,
  faClock,
  faClone,
  faCogs,
  faDatabase,
  faDollarSign,
  faEnvelope,
  faExternalLinkAlt,
  faFileContract,
  faFilter,
  faGlobe,
  faHammer,
  faHashtag,
  faICursor,
  faKey,
  faLink,
  faLock,
  faPalette,
  faPencilAlt,
  faPlus,
  faProjectDiagram,
  faQuestion,
  faRedo,
  faSearchPlus,
  faShapes,
  faSnowflake,
  faSort,
  faSortAmountDown,
  faSortAmountDownAlt,
  faStopwatch,
  faSync,
  faTable,
  faThList,
  faToolbox,
  faTrashAlt,
  faUndo,
  faUnlink,
  faUpload,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import type { IconProps } from '@mathesar-component-library/types';

/**
 * @file
 *
 * - This file contains the **Mathesar-specific** icon definitions. For generic
 *   icon definitions, see the file: `src/component-library/common/icons.ts`.
 *
 * - When placing icons in the UI, prefer using icon definitions from the
 *   component library when possible. For example, don't define `iconClose`
 *   within this file because it already exists within the component library
 *   icon definitions.
 */

// ACTIONS
//
// (These names should all be verbs)

export const iconAddNew: IconProps = { data: faPlus };
export const iconConfigure: IconProps = { data: faCogs };
export const iconDelete: IconProps = { data: faTrashAlt };
export const iconEdit: IconProps = { data: faPencilAlt };
export const iconExpandRight: IconProps = { data: faChevronRight };
export const iconImportData: IconProps = { data: faUpload };
export const iconRedo: IconProps = { data: faRedo };
export const iconRefresh: IconProps = { data: faSync };
export const iconRename: IconProps = { data: faICursor };
export const iconSelectRecord: IconProps = { data: faSearchPlus };
export const iconSetToNull: IconProps = { data: faBackspace };
export const iconSortAscending: IconProps = { data: faSortAmountDownAlt };
export const iconSortDescending: IconProps = { data: faSortAmountDown };
export const iconUndo: IconProps = { data: faUndo };
export const iconUnlink: IconProps = { data: faUnlink };

// THINGS
//
// (These names should all be nouns)

export const iconConstraint: IconProps = { data: faKey };
export const iconConstraintUnique: IconProps = { data: faSnowflake };
export const iconDatabase: IconProps = { data: faDatabase };
export const iconDbIdentifierDelimiter: IconProps = { data: faArrowRight };
export const iconDisplayOptions: IconProps = { data: faPalette };
export const iconFiltering: IconProps = { data: faFilter };
export const iconGrouping: IconProps = { data: faThList };
export const iconInwardLink: IconProps = { data: faArrowRight };
export const iconLinkToRecordPage: IconProps = { data: faExternalLinkAlt };
export const iconOutwardLink: IconProps = { data: faArrowLeft };
export const iconQuery: IconProps = { data: faFileContract };
export const iconSchema: IconProps = { data: faProjectDiagram };
export const iconSorting: IconProps = { data: faSort };
export const iconTable: IconProps = { data: faTable };
export const iconTableInspector: IconProps = { data: faToolbox };
export const iconTableLink: IconProps = { data: faLink };
export const iconTechnicalExplanation: IconProps = { data: faHammer };
export const iconUser: IconProps = { data: faUser };

// STATUSES

export const iconNotEditable: IconProps = { data: faLock };

// UI TYPES

export const iconUiTypeBoolean: IconProps = { data: faCheckSquare };
export const iconUiTypeDate: IconProps = { data: faCalendarDay };
export const iconUiTypeDateTime: IconProps = { data: faCalendarWeek };
export const iconUiTypeDuration: IconProps = { data: faStopwatch };
export const iconUiTypeEmail: IconProps = { data: faEnvelope };
export const iconUiTypeJsonArray: IconProps = { data: faClone };
export const iconUiTypeJsonObject: IconProps = { data: faShapes };
export const iconUiTypeMoney: IconProps = { data: faDollarSign };
export const iconUiTypeNumber: IconProps = { data: faHashtag };
export const iconUiTypeText: IconProps = { data: faAlignLeft };
export const iconUiTypeTime: IconProps = { data: faClock };
export const iconUiTypeUnknown: IconProps = { data: faQuestion };
export const iconUiTypeUri: IconProps = { data: faGlobe };
