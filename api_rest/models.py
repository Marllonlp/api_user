from django.db import models

class User(models.Model):

    user_nickname = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=150, default='')
    user_email = models.EmailField(default='')
    user_age = models.IntegerField(default=0)

    def __str__(self):
        # Método especial que define como o objeto será exibido em texto
        # Ex: no admin do Django ou quando usar print(objeto)
        return f'Nickname : {self.user_nickname} | E-mail: {self.user_email}'
