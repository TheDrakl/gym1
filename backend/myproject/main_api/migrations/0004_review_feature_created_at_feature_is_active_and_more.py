# Generated by Django 5.1.2 on 2024-10-26 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0003_feature_plan'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('written_by', models.CharField(max_length=15)),
                ('description', models.TextField()),
                ('stars', models.DecimalField(decimal_places=1, max_digits=2)),
                ('image', models.ImageField(upload_to='reviews/')),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AddField(
            model_name='feature',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='feature',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='feature',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='plan',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='plan',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='plan',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]