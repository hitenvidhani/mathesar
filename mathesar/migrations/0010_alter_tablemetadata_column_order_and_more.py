# Generated by Django 4.2.11 on 2024-07-10 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mathesar', '0009_add_column_metadata_model'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tablemetadata',
            name='column_order',
            field=models.JSONField(null=True),
        ),
        migrations.AlterField(
            model_name='tablemetadata',
            name='import_verified',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='tablemetadata',
            name='record_summary_customized',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='tablemetadata',
            name='record_summary_template',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
