from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
  first_name = models.CharField(null=True, max_length=255)
  last_name = models.CharField(null=True, max_length=255)
  status = models.CharField(null=True, max_length=255)
  join_date = models.DateField(null=True, blank=True)
  manager = models.ForeignKey(
    to = 'users.User',
    related_name='direct_reports',
    on_delete = models.CASCADE,
    null=True
  )
  team = models.ForeignKey(
    to= 'teams.Team',
    related_name = 'team_members',
    on_delete = models.CASCADE,
    null = True
  )
  softwares = models.ManyToManyField(
    to='softwares.Software',
    related_name='users',
    null=True
  )
  hardwares = models.ManyToManyField(
    to='hardwares.Hardware',
    related_name='users',
    null=True
  )

  def __str__(self):
    return f'{self.username} - {self.first_name} {self.last_name}'
