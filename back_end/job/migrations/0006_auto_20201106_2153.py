# Generated by Django 3.1.2 on 2020-11-06 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0005_company_info_back_ground_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company_info',
            name='name_company',
            field=models.CharField(max_length=255),
        ),
    ]
