import React from 'react';
import Link from 'next/link';

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <h3>Choose your color: </h3>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/lavender"> lavender</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
