import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState(); // String

    // imperative => vanilla JS
    // document.querySelector('button').addEventListener('click', ()=>{});

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {/* {!selectedTopic && <p>Please select a topic</p>}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}*/}
            {tabContent}
        </section>
    )
}