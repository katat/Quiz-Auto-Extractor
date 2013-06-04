define(['models/quiz.import/section.container', 'models/quiz.import/section', 'models/quiz.import/question'],
    function(SectionContainer, SectionModel, QuestionModel){
    var AutoExtractor = function(){
        this.process = function(rawHtml){
            var sectionContainer = new SectionContainer();
            //do section/question extraction processes

            //in the end of a success process
            //the sectionContainer should have the structured data
            return sectionContainer;
        }
    }

    return AutoExtractor;
});