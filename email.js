



const dynamicTemplateData = {
    url: `https://fozdeal.com/projects?user_id=${user_id}&project_status=all`,
    greeting:
        emailData.language === 'en'
            ? `Dear ${name},`
            : `,${name} مرحبا`,
    content1:
        emailData.language === 'en'
            ? `After reviewing your project, we kindly request the following modifications:`
            : ':بعد مراجعتنا لمشروعك، نرجو أن تُجري التعديلات التالية',
    content2: note,
    content3:
        emailData.language === 'en'
            ? `Click on the following button given below to view your project status.`
            : 'انقر فوق الزر أدناه لعرض حالة مشروعك',
    button_text:
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع',
    subject:
        emailData.language === 'en'
            ? 'Modification Required'
            : 'طلب تعديل',

    content4: '',
    content5: ''
};





