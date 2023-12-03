import { Toast } from "@/components/atoms/Alerts/AlertSuccess";
import CodeChallenge from "@/components/molecules/CodeChallenge";
import CodingTestStatusBar from "@/components/molecules/CodingTestStatusBar";
import { CodeChallenges } from "@/constants/codeChallenges";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CodingContent() {
    const [challengeIndex, setChallengeIndex] = useState<number>(0);
    const router = useRouter()
    const handleGoBack = () => {
        if (challengeIndex >= 1) {
            setChallengeIndex(index => index - 1)
        }
    }

    const handleNext = () => {
        if (challengeIndex < CodeChallenges.length - 1) {
            Toast.fire({
                icon:  (challengeIndex%2 === 0) ?  'success': "error",
                title: (challengeIndex%2 === 0) ? '¡Gracias por ser parte del cambio!' : "¡Mejor suerte la próxima!",
            }).then(() => {
                setChallengeIndex(index => index + 1)
            })
        }
        
    }

    const handleClickFinishReview = () => {
        router.push(ROUTES.CODING.SCORE)
    }

    return (<main className="bg-black flex flex-col" >
        <div className="basic-5">
            <CodingTestStatusBar challengeIndex={challengeIndex} />
            <CodeChallenge
                description={CodeChallenges[challengeIndex].description}
                link={CodeChallenges[challengeIndex].link}
                title={CodeChallenges[challengeIndex].title}
                task={CodeChallenges[challengeIndex].task} />
        </div>
        <section className="basic-1 flex justify-end content-end">
            <button className="mr-1 rounded-lg" onClick={handleGoBack}>Regresar</button>
            {
                (challengeIndex < CodeChallenges.length - 1) &&
                <button className="rounded-lg" onClick={handleNext}>Siguiente</button>
            }
            {
                (challengeIndex >= CodeChallenges.length - 1) &&
                <button className="rounded-lg" onClick={handleClickFinishReview} >Finalizar</button>
            }
        </section>
    </main>)
}