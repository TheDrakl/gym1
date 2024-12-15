# Generated by Django 5.1.2 on 2024-11-05 10:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0011_supplement_flavour'),
    ]

    operations = [
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='1kg', max_length=30)),
            ],
        ),
        migrations.AlterField(
            model_name='flavour',
            name='name',
            field=models.CharField(max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='supplement',
            name='flavour',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='flavour_supplements', to='main_api.flavour'),
        ),
        migrations.AddField(
            model_name='supplement',
            name='size',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='size_supplements', to='main_api.size'),
            preserve_default=False,
        ),
    ]