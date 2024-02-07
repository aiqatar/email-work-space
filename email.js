//  this email to the user
const dynamicTemplateData = {
    url: emailData.url,
    greeting:
        emailData.language === 'en'
            ? `Dear ${emailData.userName},`
            : `عزيزي ${emailData.userName}،`,
    content1:
        emailData.language === 'en'
            ? 'Your project became available again!'
            : '!مشروعك أصبح متاحاً مرة أخرى',
    content2:
        emailData.language === 'en'
            ? `Project name: ${emailData.project_name}`
            : `اسم المشروع: ${emailData.project_name}`,
    button_text:
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع',
    subject:
        emailData.language === 'en'
            ? 'Project Available Again'
            : 'مشروعك متاح مجدّداً'
};
