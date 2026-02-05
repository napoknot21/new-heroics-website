function Partenaires() {

    const directoryPath = 'logopartenaires';

    const files = [

        '1024px-J_P_Morgan_Logo_2008_1.svg.png',
        '2560px-Bloomberg_logo.svg.png',
        '2560px-BNP_Paribas_logo.svg.png',
        '2560px-Deutsche_Bank_logo.svg.png',
        '2560px-Saxo_Bank_logo.svg.png',
        '6221_resized_757_99999_90_61126f226eafb_apex-logo-150x150-002-.png',
        '6c228b_8653c64232da4d4aa181a7102e92ebea~mv2.png',
        'CréditAgricoleCIB_logo.svg.png',
        'dapm_logo.jpg',
        'Goldman_Sachs.svg.png',
        'ICE_logo_100px_RGB-01.png',
        'Kepler.svg',
        'Morgan_Stanley_Logo_1.svg.png',
        'Quintet-Private-Bank.png',
        'UBS-logo.png',
        'VCL-Logo-black-orange-1024x320.png',
    
    ];
    
    return (
        <div className='bg-mist mx-4 sm:mx-16 rounded-md '>
            <ul className='flex flex-wrap justify-center '>
                {files.map((file, index) => (
                    <li key={index} className=''>
                    <img
                        className='h-10 m-8'
                        src={`${process.env.PUBLIC_URL}/${directoryPath}/${file}`}
                        alt={`Partenaire ${index + 1}`}
                    />
                    </li>
                    ))
                }
            </ul>
        </div>
    );

}

    export default Partenaires;
