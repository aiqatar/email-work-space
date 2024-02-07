const Adminmsg = {
    to: this.adminEmail,
    from: this.from,
    dynamicTemplateData: {
        url: emailData.url,
        greeting: `Dear Admin,`,
        content1: `A Project Has Been Sold`,
        content2: `Project name: ${emailData.project_name}`,
        content3: `Project owner: ${emailData.first_name} ${emailData.last_name}`,
        button_text: 'View Details',
        subject: 'A Project Has Been Sold'
    },
    templateId: this.templateIds.content3ButtonEn
};