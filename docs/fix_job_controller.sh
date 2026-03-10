#!/bin/bash

# Backup original
cp src/controllers/recruiter/recruiterpost.controller.ts src/controllers/recruiter/recruiterpost.controller.ts.backup

# Use sed to convert class methods to arrow functions
sed -i.tmp '
s/import { JobRepository }/import { jobRepository }/
s/const jobRepository = new JobRepository();//
s/export class JobController {//
s/  async \(createJob\|getMyJobs\|getJobById\|updateJob\|deleteJob\|filterJobs\|searchJobs\|getAllJobs\)(/const \1 = async (/
' src/controllers/recruiter/recruiterpost.controller.ts

echo "Conversion done! Check the file."
