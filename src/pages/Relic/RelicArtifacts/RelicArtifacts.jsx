import React from 'react';
import { relicsArtifact } from '../constants/constants';
import "./RelicArtifacts.scss";
import RelicArtifactsList from './RelicArtifactsList/RelicArtifactsList';
export default function RelicArtifacts() {
    const newRelicsArtifact = splitArrayArtifacts(relicsArtifact);
    return (
        <div className='relicArtifacts' data-aos="fade-up">
            <span className="relicArtifacts__title">
                Hiện vật
            </span>
            <RelicArtifactsList>
                {
                    newRelicsArtifact && newRelicsArtifact.map((relicArtifactGroup, index) => {
                        return <RelicArtifactsList.GroupImage key={index}>
                            {
                                relicArtifactGroup.map((relicArtifactItem) => {
                                    return <RelicArtifactsList.ItemImage image={relicArtifactItem.image} key={relicArtifactItem.id} />;
                                })
                            }
                        </RelicArtifactsList.GroupImage>;
                    })
                }
            </RelicArtifactsList>
            {/* <RelicArtifactsList>
                <RelicArtifactsList.GroupImage>
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                </RelicArtifactsList.GroupImage>
                <RelicArtifactsList.GroupImage>
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                </RelicArtifactsList.GroupImage>
                <RelicArtifactsList.GroupImage>
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                </RelicArtifactsList.GroupImage>
                <RelicArtifactsList.GroupImage>
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                </RelicArtifactsList.GroupImage>
                <RelicArtifactsList.GroupImage>
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                </RelicArtifactsList.GroupImage>
                <RelicArtifactsList.GroupImage>
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                    <RelicArtifactsList.ItemImage image={imageTest} />
                </RelicArtifactsList.GroupImage>
            </RelicArtifactsList> */}
        </div>
    );
}

function splitArrayArtifacts(array) {
    let tempArray = [...array];
    let resultArray = [];
    let numberSplit = [3, 2];
    while (tempArray.length > 0) {
        resultArray = [...resultArray, tempArray.splice(0, numberSplit[0])];
        resultArray = [...resultArray, tempArray.splice(0, numberSplit[1])];
        numberSplit.reverse();
    }

    return resultArray;
}

