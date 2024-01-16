from django.db import models

# Create your models here.
class Team(models.Model):
  name = models.CharField(max_length=255)
  manager = models.ForeignKey(
    to= 'users.User',
    on_delete = models.CASCADE,
    related_name='team_managed'
  )
  description = models.TextField(null=True)

  def __str__(self):
    return self.name
