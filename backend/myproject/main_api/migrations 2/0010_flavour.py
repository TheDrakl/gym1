# Generated by Django 5.1.2 on 2024-11-05 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0009_alter_plan_options_alter_review_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Flavour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
    ]
