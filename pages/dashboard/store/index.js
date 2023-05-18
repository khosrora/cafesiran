import LayoutPanel from "../../../components/panel/layout/layoutPanel";




const StoreIndex = () => {

    

    return (
        <LayoutPanel>
            <div className="grid grid-cols-2 gap-2">
                {
                    [1, 2, 3, 4].map(i =>
                        <div className="border rounded-md">

                        </div>
                    )
                }
            </div>
        </LayoutPanel>
    );
}

export default StoreIndex;