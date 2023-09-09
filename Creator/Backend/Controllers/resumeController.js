import ResumeData from '../models/resume';

const saveResume = (req, res) => {
    const data = req.body;
    console.log(data);
    data.userID = "1";
    const resumeData = new ResumeData(data);
    console.log(resumeData);

    resumeData.save()
        .then(() => {
        res.status(200).send('Data saved successfully!');
        })
        .catch(error => {
        res.status(500).send('Error saving data: ' + error);
        });
};
export default saveResume;