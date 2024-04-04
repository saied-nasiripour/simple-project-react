import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            {/*<ul>
                        <CoreConcept
                            title="Components"
                            description="The core UI building block - compose the user interface by combining multiple components."
                            image={componentsImg}
                        />
                        <CoreConcept
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>*/}
            <ul>
                {CORE_CONCEPTS.map((CORE_CONCEPT) => (
                    <CoreConcept key={CORE_CONCEPT.title} {...CORE_CONCEPT}/>
                ))}
            </ul>
        </section>
    )
}