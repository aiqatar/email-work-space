


const dynamicTemplateData = {
    url: `https://fozdeal.com/projects/${project_id}`,
    greeting:
        emailData.language === 'en'
            ? `Dear ${first_name},`
            : `عزيزي ${first_name}،`,
    content1:
        emailData.language === 'en'
            ? `Thank you for uploading your project on FOZDEAL
             platform. We’ll contact you once it gets reviewed.`
            : 'نشكرك على رفع مشروعك في منصة فوزديل، وسيتم التواصل معك بعد إتمام مراجعته.',
    content2:
        emailData.language === 'en'
            ? `You can track your project status from here:`
            : 'يمكنك متابعة حالة المشروع من هنا',
    button_text:
        emailData.language === 'en' ? 'Project Status' : 'حالة المشروع',
    subject:
        emailData.language === 'en' ? 'Project Status' : 'حالة المشروع'
};

