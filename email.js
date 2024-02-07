// USER
const dynamicTemplateData = {
    url: emailData.url,
    greeting:
        emailData.language === 'en'
            ? `Dear ${name},`
            : `عزيزي ${name}،`,
    content1:
        emailData.language === 'en'
            ? `Thank you for paying the amount of ($X). Your project has been Featured for ${emailData.no_of_days} days.`
            : `نشكرك لدفع مبلغ () ريال قطري. تم تمييز مشروعك لمدة ${emailData.no_of_days} يومًا.`,
    content2:
        emailData.language === 'en'
            ? `Project name: ${emailData.project_name}`
            : `اسم المشروع: ${emailData.project_name}`,
    button_text:
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع',
    subject:
        emailData.language === 'en'
            ? 'Project Featured'
            : 'تم تمييز مشروعك'
};


// ADMIN
const AdminMsg = {
    to: this.adminEmail,
    from: { email: this.from, name: 'FozDeal' },
    dynamicTemplateData: {
        url: emailData.url,
        greeting: `Hi Admin,`,
        content1: `The following project has been Featured for ${emailData.no_of_days} days:`,
        content2: `Project name: ${emailData.project_name}`,
        content3: `Project owner`
        button_text: 'View Project',
        subject: 'A Project Has Been Featured'
    },
    templateId: this.templateIds.content2ButtonEn
};