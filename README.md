Quiz-Auto-Extractor
===================

Summary:
Extract the contents from quiz HTML documents and separate them into different question items and their corresponding answers.

Instruction:
The test/docs are documented with the various formats that need to deal with for auto extraction.
The standard format that can be easily extracted is the good.standard.html file. The other files can be compared with this file to understand what kinds of odd formats needs to be dealt with.

To execute the jasmine bdd code, deploy the extracted directory to a host, and open browser with link to "http://172.16.121.133:8888/test/quiz.extractor.runner.html" etc.
Then you will see the failed tests that needs implementations to make them pass.

The file for the jasmine test code is in the test/specs/quiz.auto.extract.spec.js
The test/require.config.js is the requirejs config file.
The models folder has the included model files to be implemented. To understand the dependency of the models and method call logics, can refer to the test flow in quiz.auto.extract.spec.js file.
