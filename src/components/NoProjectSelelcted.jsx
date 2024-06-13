import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const classes =
    "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";

export default function NoProjectSelected() {
    return (
        <div className="mt-24 text-center w-2/3">
            <img
                src={noProjectImage}
                alt="no project image"
                className="w-16 h-16 object-contain mx-auto"
            />
            <h2 className="Text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">
                Select a Project or get started with a new one
            </p>
            <p className="mt-8">
                <Button>Create new project</Button>
            </p>
        </div>
    );
}
