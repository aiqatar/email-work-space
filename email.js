const dynamicTemplateData = {
    url: emailData.url,
    greeting:
        emailData.language === 'en'
            ? `Dear ${emailData.userName},`
            : `عزيزي ${emailData.userName}،`,
    content1:
        emailData.language === 'en'
            ? 'Your project is sold.'
            : 'مشروعك متاح مرة أخرى.',
    content2:
        emailData.language === 'en'
            ? `Project name: ${emailData.project_name}`
            : `اسم المشروع: ${emailData.project_name}`,
    button_text:
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع',
    subject:
        emailData.language === 'en' ? 'Project Sold' : 'المشروع متاح'
};
// msg to the user
const msg = {
    to: emailData.userEmail,
    from: { email: this.from, name: 'Fozdeal' },
    dynamicTemplateData,
    templateId:
        emailData.language === 'en'
            ? this.templateIds.content2ButtonEn
            : this.templateIds.content2ButtonAr
};      : 'مشروعك متاح مجدّداً'
};
