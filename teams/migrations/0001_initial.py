# Generated by Django 5.0.1 on 2024-01-15 17:06

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('manager', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='team_managed', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
