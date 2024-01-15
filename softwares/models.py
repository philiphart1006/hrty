from django.db import models

# Create your models here.

class Software(models.Model):
  name = models.CharField(max_length=255)
  licence_cost = models.PositiveIntegerField
  active = models.BooleanField(default=True)
  
  def __str__(self):
    return self.name