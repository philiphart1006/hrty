
from django.db import models

# Create your models here.

class Hardware(models.Model):
  name = models.CharField(max_length=255)
  type = models.CharField(max_length=255, null=True)
  value = models.PositiveIntegerField(null=True)
  year = models.PositiveIntegerField(null=True)
  
  def __str__(self):
    return f'{self.name} - {self.type}'