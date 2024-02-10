
// this email is send to user when admin will chang users account status

// when account get inactivated
const dynamicTemplateData = {
    url: 'https://fozdeal.com',
    greeting:
        emailData.language === 'en'
            ? `Dear ${emailData.userName}`
            : `عزيزي ${emailData.userName}،`,
    content1:
        emailData.language === 'en'
            ? 'Your account has been Inactivated'
            : 'تم تعطيل حسابك',
    content2:
        emailData.language === 'en'
            ? 'You can contact the FOZDEAL team for more details.'
            : 'يمكنك الاتصال بفريق فوزديل للحصول على مزيد من التفاصيل.',
    button_text:
        emailData.language === 'en' ? 'Contact Us' : 'اتصل بنا',
    subject:
        emailData.language === 'en'
            ? 'Account Inactivated'
            : 'تم تعطيل الحساب'
};

// when users account get activated
if (emailData.status === 'active') {
    dynamicTemplateData.url = 'https://fozdeal.com/login';
    dynamicTemplateData.content1 =
        emailData.language === 'en'
            ? 'Your account has been Activated'
            : 'تم تنشيط حسابك';
    dynamicTemplateData.content2 =
        emailData.language === 'en'
            ? 'You can now login to your account'
            : 'يمكنك الآن تسجيل الدخول إلى حسابك';
    dynamicTemplateData.button_text =
        emailData.language === 'en' ? 'Login' : 'تسجيل الدخول';
    dynamicTemplateData.subject =
        emailData.language === 'en'
            ? 'Account Activated'
            : 'تم تنشيط الحساب';
}