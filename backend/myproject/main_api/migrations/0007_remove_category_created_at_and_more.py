# Generated by Django 5.1.2 on 2024-10-26 17:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0006_remove_plan_created_at_remove_plan_is_active_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='category',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='gym',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='gym',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='review',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='review',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='supplement',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='supplement',
            name='updated_at',
        ),
    ]
