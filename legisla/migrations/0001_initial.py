# Generated by Django 5.0.4 on 2024-04-09 23:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OrgaoGovernamental',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('sigla', models.CharField(max_length=100)),
                ('endereco', models.CharField(max_length=100)),
                ('contato', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Lei',
            fields=[
                ('numero', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('data_publicacao', models.DateField()),
                ('titulo', models.CharField(max_length=200)),
                ('conteudo', models.TextField()),
                ('orgao', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='legisla.orgaogovernamental')),
            ],
        ),
        migrations.CreateModel(
            name='Decreto',
            fields=[
                ('numero', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('data_publicacao', models.DateField()),
                ('titulo', models.CharField(max_length=200)),
                ('conteudo', models.TextField()),
                ('orgao', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='legisla.orgaogovernamental')),
            ],
        ),
        migrations.CreateModel(
            name='Portaria',
            fields=[
                ('numero', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('data_publicacao', models.DateField()),
                ('titulo', models.CharField(max_length=200)),
                ('conteudo', models.TextField()),
                ('orgao', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='legisla.orgaogovernamental')),
            ],
        ),
    ]
