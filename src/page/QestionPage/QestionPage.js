import React from 'react';
import { Link } from 'react-router-dom';

export default function QuestionPage() {
  return (
    <div>
      QuestionPage
      <Link to="/topic" relative="path">
        <button>back</button>
      </Link>
    </div>
  );
}
