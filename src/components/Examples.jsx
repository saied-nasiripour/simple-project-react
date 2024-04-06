import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import {Section} from "./Section";
import Tabs from "./Tabs";

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
        <Section title={"Examples"} id="examples">
            <Tabs
                buttonsContainer="menu" // or "ul" or "div" or {Section}
                // ButtonsContainer="menu" // or "ul" or "div" or {Section}
                buttons={<>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => handleSelect('components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleSelect('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => handleSelect('props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => handleSelect('state')}
                >
                    State
                </TabButton>
            </>}
            >
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
            </Tabs>
        </Section>
    )
}