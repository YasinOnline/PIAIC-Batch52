'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function StudentPage() {
    const router = useRouter();

    const navigateToHome = () => {
        router.push('/'); // Programmatic navigation to home page
    };

    return (
        <div>
            <h1>Student Page</h1>
            <p>This is where student information will be displayed. Link component and the useRouter() hook is used for navigation.</p>
            <Link href="/">Back to Home (Link Component)</Link><br /><br />
            <button onClick={navigateToHome}>Back to Home (userRouter)</button>
        </div>
    );
}

export default StudentPage;
