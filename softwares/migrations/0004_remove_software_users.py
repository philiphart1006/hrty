# Generated by Django 5.0.1 on 2024-01-16 12:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('softwares', '0003_software_users'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='software',
            name='users',
        ),
    ]