from django.core.mail import send_mail


# Send email to customer and team
def send_notification_email(subject_user, subject_team, message_user, message_team, user_email, team_email):
    try:
        send_mail(
            subject_user,
            message_user,
            'denysmelnyk262626@gmail.com',
            [user_email],
            fail_silently=False,
        )
        send_mail(
            subject_team,
            message_team,
            'denysmelnyk262626@gmail.com',
            [team_email],
            fail_silently=False,
        )
    except Exception as e:
        raise Exception(f'Email sending failed: {str(e)}')
