from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse

import json

def compose(request): 

    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)
    try:
        data = json.loads(request.body)
        sender_name = data.get("name", "")
        sender_email = data.get("email", "")
        message = data.get("body", "")

        message = ''' 
        New Message: {}

        From: {} 
        '''.format(message, sender_email)
        send_mail(
            sender_name,
            message,
            sender_email,
            ['alexis.jm29@gmail.com'],
            fail_silently=False
        )
        return JsonResponse({'success': 'the email was send'}, status=201) 
    except:
        return JsonResponse({"error": "somthing went wrong"}, status=400) 

