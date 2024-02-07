const dynamicTemplateData = {
    url: emailData.url,
    greeting:
        emailData.language === 'en'
            ? `Dear ${emailData.userName},`
            : `عزيزي ${emailData.userName}،`,
    content1:
        emailData.language === 'en'
            ? 'Your project is set to be: sold. You can contact us if you want to change that.'
            : 'تم تغيير حالة مشروعك إلى: مُباع. يمكنك التواصل معنا إذا رغبت في تغيير ذلك',
    content2:
        emailData.language === 'en'
            ? `Project name: ${emailData.project_name}`
            : `اسم المشروع: ${emailData.project_name}`,
    button_text:
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع',
    subject:
        emailData.language === 'en' ? 'Project Set to Sold' : ' حالة المشروع - مُباع '
};
