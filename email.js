
//project sold
const dynamicTemplateData = {
    url: emailData.url,
    greeting: `Dear Admin,`,
    content1: `The following project has been set as: Sold.`,
    content2: `Project name: ${emailData.project_name}`,
    content3: `Project owner: ${emailData.name}`,
    button_text: 'View Details',
    subject: 'Sold Project'
};



//  this email to the user
const dynamicTemplateData = {
    url: emailData.url,
    greeting:
        emailData.language === 'en'
            ? `Dear ${emailData.userName},`
            : `عزيزي ${emailData.userName}،`,
    content1:
        emailData.language === 'en'
            ? 'Your project is available again.'
            : 'مشروعك متاح مرة أخرى.',
    content2:
        emailData.language === 'en'
            ? `Project name: ${emailData.project_name}`
            : `اسم المشروع: ${emailData.project_name}`,
    button_text:
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع',
    subject:
        emailData.language === 'en'
            ? 'Project Available'
            : 'المشروع متاح'
};

// this email to the admin
const AdminMsg = {
    to: this.adminEmail,
    from: { email: this.from, name: 'FozDeal' },
    dynamicTemplateData: {
        url: emailData.url,
        greeting: `Hi Admin,`,
        content1: `The following project is set to Available:`,
        content2: `Project name: ${emailData.project_name}`,
        button_text: 'View Project',
        subject: 'Project Available'
    },
    templateId: this.templateIds.content2ButtonEn
};