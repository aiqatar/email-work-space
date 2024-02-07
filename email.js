




const dynamicTemplateData = {
    url: `https://fozdeal.com/user/verify/email/${hash}`,
    greeting:
        emailData.language === 'en'
            ? `Dear ${name},`
            : `عزيزي ${name}،`,
    content1:
        emailData.language === 'en'
            ? 'After verifying your email, the journey on FOZDEAL starts. Please click here:'
            : 'ستبدأ رحلتك في فوزديل بعد التحقق من بريدك الإلكتروني. فضلاً انقر هنا:',
    button_text: emailData.language === 'en' ? 'Verify' : 'تحقق',
    subject:
        emailData.language === 'en'
            ? 'Verify Your Account'
            : 'التحقق من البريد'
};







