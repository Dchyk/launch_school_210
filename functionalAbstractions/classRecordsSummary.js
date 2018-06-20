var EXAM_WEIGHT     = 0.65;
var EXERCISE_WEIGHT = 0.35;
var NUMBER_OF_EXAMS = 4;

function generateClassRecordSummary(studentScores) {
  var summary = {
    studentGrades: [],
  }
  var numericalGrade;
  var examGrades;
  var students = Object.keys(studentScores);

  students.forEach( function(student) {
    numericalGrade = weightedScore(studentScores[student]);
    summary.studentGrades.push(formattedLetterGrade(numericalGrade));
  })

  summary.exams = examData(studentScores);

  return summary;
}

function examData(studentScores) {
  var students = Object.values(studentScores);
  var currentExamScores = [];
  var examData = [];
  var i;
  
  for (i = 0; i < NUMBER_OF_EXAMS; i += 1) {
    students.forEach( function(studentData) {
      currentExamScores.push(studentData.scores.exams[i]);
    });

    examData.push({
      average: averageExamScore(currentExamScores),
      minimum: minimumScore(currentExamScores),
      maximum: maximumScore(currentExamScores),
    });

    // Reset the temporary exam scores array
    currentExamScores = [];
  }

  return examData;
}

function averageExamScore(examScores) {
  var total = examScores.reduce( function(a, b) {
      return a + b;
  }); 
  
  var average = total / examScores.length;

  return average.toFixed(1);
}

function totalScore(scores) {
  return scores.reduce( function (score1, score2) {
    return score1 + score2;
  });
}

function minimumScore(scores) {
  var sortedAscending = scores.sort( function(a, b) { 
    return a > b;
  });

  return sortedAscending[0];
}

function maximumScore(scores) {
  var sortedDescending = scores.sort( function(a, b) { 
    return a < b;
  });

  return sortedDescending[0];
}

function weightedScore(student) {
  var weightedScore = averageExamScore(student.scores.exams) * EXAM_WEIGHT + totalScore(student.scores.exercises) * EXERCISE_WEIGHT;

  return Math.round(weightedScore);
}

function formattedLetterGrade(grade) {
  switch (true) {
    case (grade >= 93):
      return String(grade) + ' (A)';
      break;
    case (grade <= 92 && grade >= 85):
      return String(grade) + ' (B)';
      break;
    case (grade <= 84 && grade >= 77):
      return String(grade) + ' (C)';
      break;
    case (grade <= 76 && grade >= 69):
      return String(grade) + ' (D)';
      break;
    case (grade <= 68 && grade >= 60):
      return String(grade) + ' (E)';
      break;
    default:
      return String(grade) + ' (F)';
      break;
  }
}

// Test data

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

generateClassRecordSummary(studentScores);

// returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}