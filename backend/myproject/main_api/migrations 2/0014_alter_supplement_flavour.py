# Generated by Django 5.1.2 on 2024-11-05 11:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0013_alter_supplement_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supplement',
            name='flavour',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='flavour_supplement', to='main_api.flavour'),
        ),
    ]