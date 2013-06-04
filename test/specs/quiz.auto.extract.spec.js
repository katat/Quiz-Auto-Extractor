define(['models/quiz.import/auto.extractor',
        'text!test/docs/various.layouts/good.standard.html'],
    function(ImportQuizModel,
             GoodStandardDoc){
        describe('Auto Extractor for quiz document', function() {
            describe('process good standard document', function(){
                var importQuizModel, sectionContainer;
                beforeEach(function(){
                    importQuizModel = new ImportQuizModel();
                    sectionContainer = importQuizModel.process(GoodStandardDoc);

                }),

                it('then should construct the SectionContainer model properly', function(){
                    expect(sectionContainer.getSections().length).toBe(3);
//                    expect(sectionContainer.getQuestions().length).toBe(6);

                    expect(sectionContainer.getSections()[0].getQuestions().length).toBe(3);
                    expect(sectionContainer.getSections()[1].getQuestions().length).toBe(2);
                    expect(sectionContainer.getSections()[2].getQuestions().length).toBe(1);
                })

                it('then question models should be constructed with description correctly bound with solution', function(){
                    expect(
                        sectionContainer
                            .getSections()[0]
                            .getQuestions()[0]
                            .getDescription())
                        .toBe(
                        "<p attr>1．this is first question in the document</p>"+
                        "<p attr>other description</p>"+
                        "<p attr>other description</p>"+
                        "<p attr>other description</p>");
                    expect(
                        sectionContainer
                            .getSections()[0]
                            .getQuestions()[0]
                            .getSolution())
                        .toBe(
                        "<p attr>1.A</p>");

                    expect(
                        sectionContainer
                            .getSections()[0]
                            .getQuestions()[1]
                            .getDescription())
                        .toBe(
                        "<p attr>2．this is second question in the document</p>"+
                        "<p attr>other description</p>"+
                        "<p attr>other description</p>");
                    expect(
                        sectionContainer
                            .getSections()[0]
                            .getQuestions()[1]
                            .getSolution())
                        .toBe(
                        "<p attr>2.B</p>");

                    //same tests for the following 4 questions
                });
            })
            describe('process choices.in.one.row.1 document', function(){})
            describe('process choices.in.one.row.2 document', function(){})
            describe('process choices.in.one.row.3 document', function(){})
            describe('process input.answer.in.one.row document', function(){})
            describe('process no.section document', function(){})
            describe('process question.number.noisy document', function(){})
            describe('process inconsistent.question.number.mark document', function(){})
        });
    }
)