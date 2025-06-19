import { useState } from 'react';

export default function JobWizard() {
  const [step, setStep] = useState(1);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Job Wizard — Step {step}</h1>
      <p>This is where Jeanie helps post a job!</p>

      <div style={{ marginTop: '2rem' }}>
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} style={{ marginRight: '1rem' }}>
            Back
          </button>
        )}
        {step < 4 && (
          <button onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}
        {step === 4 && <button onClick={() => alert('Job submitted!')}>Submit</button>}
      </div>
    </main>
  );
}
