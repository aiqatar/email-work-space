//  if the project is rejected 
const dynamicTemplateData = {
    url: `https://fozdeal.com/add-project?participant_id=${participant_id}`,
    greeting:
        emailData.language === 'en'
            ? `Dear ${name},`
            : `عزيزي ${name}،`,
    content1:
        emailData.language === 'en'
            ? `After a careful review of your project, we regret to inform you that you cannot participate in the event. However, you can display your project on FOZDEAL.`
            : 'بعد مراجعة مشروعك بعناية، نأسف لإبلاغك بعدم إمكانية مشاركتك في الحدث. ومع ذلك، يمكنك عرض مشروعك على منصة فوزديل.',
    content2: note,
    content3:
        emailData.language === 'en'
            ? `Click on the button below to upload your project:`
            : 'انقر على الزر أدناه لتحميل مشروعك:',
    button_text:
        emailData.language === 'en'
            ? 'Upload Project'
            : 'تحميل المشروع',
    subject:
        emailData.language === 'en'
            ? 'Project Rejected'
            : 'تم رفض المشروع'
};

// if project is approved
if (emailData.project_status === 'approved') {
    dynamicTemplateData.url = `https://fozdeal.com/participant-detail/${participant_id}`;
    dynamicTemplateData.content1 =
        emailData.language === 'en'
            ? 'Congratulations! Your project has been approved, and you are eligible to participate in the event.'
            : 'تهانينا! تم قبول مشروعك، وأنت مؤهل للمشاركة في الحدث.';
    dynamicTemplateData.content2 =
        emailData.language === 'en'
            ? 'Click on the button below to view your project:'
            : 'انقر على الزر أدناه لعرض مشروعك:';
    dynamicTemplateData.button_text =
        emailData.language === 'en' ? 'View Project' : 'عرض المشروع';
    dynamicTemplateData.subject =
        emailData.language === 'en'
            ? 'Project Accepted'
            : 'تم قبول المشروع';
}
