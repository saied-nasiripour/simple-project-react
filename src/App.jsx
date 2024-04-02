import {useState} from 'react';
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from './data';
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

    const [selectedTopic, setSelectedTopic] = useState('please click a button');

    // imperative => vanilla JS
    // document.querySelector('button').addEventListener('click', ()=>{});

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    console.log('App COMPONENT EXECUTING');

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
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
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
