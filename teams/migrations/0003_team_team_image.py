# Generated by Django 5.0.1 on 2024-01-18 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0002_team_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='team_image',
            field=models.CharField(null=True),
        ),
    ]