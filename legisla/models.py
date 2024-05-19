from django.db import models

# Create your models here.
class OrgaoGovernamental(models.Model):
    nome = models.CharField(max_length=100)
    sigla = models.CharField(max_length=100)
    endereco = models.CharField(max_length=100)
    contato = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Lei(models.Model):
    numero = models.CharField(max_length=50, primary_key=True)
    data_publicacao = models.DateField()
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    orgao = models.ForeignKey(OrgaoGovernamental, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo


class Decreto(models.Model):
    numero = models.CharField(max_length=50, primary_key=True)
    data_publicacao = models.DateField()
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    orgao = models.ForeignKey(OrgaoGovernamental, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo


class Portaria(models.Model):
    numero = models.CharField(max_length=50, primary_key=True)
    data_publicacao = models.DateField()
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    orgao = models.ForeignKey(OrgaoGovernamental, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
