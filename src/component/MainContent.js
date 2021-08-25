import { useState } from 'react';
import '../style/maincontent.css';
import { Button } from 'react-bootstrap';
import ReadMore  from '../modal/ReadMore';

function MainContent() {

    const [showReadMore, setShowReadMore] = useState(false);
    const closeIn = () => setShowReadMore(false);

    return (
        <>
            <div className="main-content">
                <h2>Wellcome to pilot Beach Resort</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam dolores provident
                    praesentium explicabo? Blanditiis ipsam magnam eum maiores temporibus assumenda magni
                    et. Itaque cum, laboriosam officiis debitis alias dolores!
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam dolores provident
                    praesentium explicabo? Blanditiis ipsam magnam eum maiores temporibus assumenda magni
                    et. Itaque cum, laboriosam officiis debitis alias dolores!
                    ipsum dolor, sit amet consectetur adipisicing elit. Id veniam dolores provident
                    praesentium explicabo? Blanditiis ipsam magnam eum maiores temporibus assumenda magni
                    et. Itaque cum, laboriosam officiis debitis alias dolores!
                </p>
                <Button
                    variant="outline-primary"
                    onClick={() => setShowReadMore(true)}
                >
                    Read More
                </Button>
            </div>
            <ReadMore
                modal_show={showReadMore}
                modal_hide={closeIn}
            />
        </>
    );
}

export default MainContent;
