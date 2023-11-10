/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Flute_0: THREE.Mesh
    RabbitPink_0: THREE.Mesh
    SmallBench_0: THREE.Mesh
    Bench_0: THREE.Mesh
    Golem_0: THREE.SkinnedMesh
    Table_0: THREE.Mesh
    Campfire_0: THREE.Mesh
    DrinkMug_0: THREE.Mesh
    Grog_0: THREE.Mesh
    BoozeBottle_0: THREE.Mesh
    Wizard_0: THREE.Mesh
    WizardStaff_0: THREE.Mesh
    Treeant_0: THREE.SkinnedMesh
    Fairy01_0: THREE.Mesh
    Bush_0: THREE.Mesh
    EvilPortal_0: THREE.Mesh
    Barrel_0: THREE.Mesh
    EvilLord_0: THREE.Mesh
    Pine01_0: THREE.Mesh
    Tree01_0: THREE.Mesh
    FlowerYellow_0: THREE.Mesh
    RabbitWhite_0: THREE.Mesh
    Fairy04_0: THREE.Mesh
    Fairy02_0: THREE.Mesh
    Fairy03_0: THREE.Mesh
    Ogre_0: THREE.Mesh
    Club_0: THREE.Mesh
    Pine03_0: THREE.Mesh
    Pine04_0: THREE.Mesh
    KingdomOrb_0: THREE.Mesh
    SkeletonSoldier_0: THREE.Mesh
    Butterfly02_0: THREE.Mesh
    NightMare_0: THREE.Mesh
    StonehengeOrb_0: THREE.Mesh
    VulcanoOrb_0: THREE.Mesh
    Tree03_0: THREE.Mesh
    Rock_0: THREE.Mesh
    JapaneseOrb_0: THREE.Mesh
    DarkRealmOrb_0: THREE.Mesh
    Land_0: THREE.Mesh
    Bush001_0: THREE.Mesh
    EvilLordStaff_0: THREE.Mesh
    Well_0: THREE.Mesh
    Bucket_0: THREE.Mesh
    Rock3_0: THREE.Mesh
    MushroomMan_0: THREE.SkinnedMesh
    MushroomBoy_0: THREE.SkinnedMesh
    Wanderer_0: THREE.SkinnedMesh
    WandererSon_0: THREE.SkinnedMesh
    Bear_0: THREE.SkinnedMesh
    PipeFlute_0: THREE.Mesh
    Circle_0: THREE.Mesh
    Tree03001_0: THREE.Mesh
    Pine05001_0: THREE.Mesh
    Pine05002_0: THREE.Mesh
    Bush003_0: THREE.Mesh
    Tree02002_0: THREE.Mesh
    Pine03002_0: THREE.Mesh
    Bush004_0: THREE.Mesh
    Pine02002_0: THREE.Mesh
    Pine02003_0: THREE.Mesh
    Pine01002_0: THREE.Mesh
    Pine01003_0: THREE.Mesh
    Tree01003_0: THREE.Mesh
    Bush006_0: THREE.Mesh
    Bush007_0: THREE.Mesh
    Tree03003_0: THREE.Mesh
    Tree02004_0: THREE.Mesh
    Pine04001_0: THREE.Mesh
    Ogre001_0: THREE.SkinnedMesh
    EvilPortal001_0: THREE.Mesh
    SkeletonSoldier001_0: THREE.Mesh
    NightMare001_0: THREE.Mesh
    NightMare002_0: THREE.Mesh
    Golem001_0: THREE.SkinnedMesh
    Unicorn001_0: THREE.Mesh
    Unicorn002_0: THREE.Mesh
    Bush008_0: THREE.Mesh
    TreeTrunk002_0: THREE.Mesh
    TreeTrunk003_0: THREE.Mesh
    TreeTrunk004_0: THREE.Mesh
    SmallBench001_0: THREE.Mesh
    Bear002_0: THREE.SkinnedMesh
    Bush009_0: THREE.Mesh
    Bush010_0: THREE.Mesh
    Bush012_0: THREE.Mesh
    Bush013_0: THREE.Mesh
    DrinkMug001_0: THREE.Mesh
    Grog001_0: THREE.Mesh
    Barrel002_0: THREE.Mesh
    Treeant001_0: THREE.SkinnedMesh
    RabbitPink001_0: THREE.Mesh
    RabbitPink002_0: THREE.Mesh
    RabbitPink003_0: THREE.Mesh
    RabbitPink005_0: THREE.Mesh
    RabbitPink006_0: THREE.Mesh
    RabbitPink007_0: THREE.Mesh
    RabbitPink008_0: THREE.Mesh
    RabbitPink009_0: THREE.Mesh
    Rock002_0: THREE.Mesh
    Rock003_0: THREE.Mesh
    Rock004_0: THREE.Mesh
    Rock005_0: THREE.Mesh
    Rock006_0: THREE.Mesh
    Rock007_0: THREE.Mesh
    Rock010_0: THREE.Mesh
    Rock011_0: THREE.Mesh
    Rock3001_0: THREE.Mesh
    Grass002_0: THREE.Mesh
    Grass004_0: THREE.Mesh
    Grass005_0: THREE.Mesh
    Grass008_0: THREE.Mesh
    Grass011_0: THREE.Mesh
    Faun_0: THREE.SkinnedMesh
    Grass013_0: THREE.Mesh
    Grass014_0: THREE.Mesh
    Grass017_0: THREE.Mesh
    Grass019_0: THREE.Mesh
    Grass020_0: THREE.Mesh
    Grass025_0: THREE.Mesh
    Grass028_0: THREE.Mesh
    Grass030_0: THREE.Mesh
    Grass032_0: THREE.Mesh
    Grass033_0: THREE.Mesh
    Grass035_0: THREE.Mesh
    Grass037_0: THREE.Mesh
    Grass044_0: THREE.Mesh
    Grass049_0: THREE.Mesh
    Grass051_0: THREE.Mesh
    Grass057_0: THREE.Mesh
    Grass060_0: THREE.Mesh
    Grass064_0: THREE.Mesh
    Grass111_0: THREE.Mesh
    Grass113_0: THREE.Mesh
    Grass124_0: THREE.Mesh
    Grass128_0: THREE.Mesh
    FlowerWhite006_0: THREE.Mesh
    FlowerWhite010_0: THREE.Mesh
    FlowerWhite015_0: THREE.Mesh
    FlowerWhite016_0: THREE.Mesh
    FlowerWhite017_0: THREE.Mesh
    FlowerWhite037_0: THREE.Mesh
    FlowerYellow001_0: THREE.Mesh
    FlowerYellow003_0: THREE.Mesh
    FlowerYellow004_0: THREE.Mesh
    FlowerYellow006_0: THREE.Mesh
    Grass012_0: THREE.Mesh
    FlowerYellow007_0: THREE.Mesh
    FlowerYellow009_0: THREE.Mesh
    FlowerYellow010_0: THREE.Mesh
    FlowerYellow011_0: THREE.Mesh
    FlowerYellow013_0: THREE.Mesh
    FlowerYellow014_0: THREE.Mesh
    FlowerYellow021_0: THREE.Mesh
    Mushroom001_0: THREE.Mesh
    Mushroom002_0: THREE.Mesh
    Mushroom004_0: THREE.Mesh
    Mushroom005_0: THREE.Mesh
    Mushroom006_0: THREE.Mesh
    RabbitWhite002_0: THREE.Mesh
    RabbitWhite003_0: THREE.Mesh
    Butterfly02001_0: THREE.Mesh
    Butterfly02002_0: THREE.Mesh
    Butterfly02003_0: THREE.Mesh
    Butterfly02004_0: THREE.Mesh
    Butterfly02005_0: THREE.Mesh
    Butterfly01001_0: THREE.Mesh
    Butterfly01002_0: THREE.Mesh
    Butterfly01003_0: THREE.Mesh
    Butterfly01004_0: THREE.Mesh
    Butterfly01005_0: THREE.Mesh
    Butterfly01006_0: THREE.Mesh
    Fairy01001_0: THREE.Mesh
    Fairy04001_0: THREE.Mesh
    Fairy04002_0: THREE.Mesh
    Rock2001_0: THREE.Mesh
    Rock2002_0: THREE.Mesh
    Fairy02001_0: THREE.Mesh
    Fairy02002_0: THREE.Mesh
    Fairy03001_0: THREE.Mesh
    GolemArmature_rootJoint: THREE.Bone
    TreeantArmature_rootJoint: THREE.Bone
    MushroomManArmature_rootJoint: THREE.Bone
    MushroomBoyArmature_rootJoint: THREE.Bone
    WandererArmature_rootJoint: THREE.Bone
    WandererSonArmature_rootJoint: THREE.Bone
    BearArmature_rootJoint: THREE.Bone
    OgreArmature001_rootJoint: THREE.Bone
    GolemArmature001_rootJoint: THREE.Bone
    BearArmature002_rootJoint: THREE.Bone
    TreeantArmature001_rootJoint: THREE.Bone
    FaunArmature_rootJoint: THREE.Bone
  }
  materials: {
    ['Fairy03.001_0']: THREE.MeshStandardMaterial
    ['Fairy03.001_0']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
}

export const Model = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(
    '/models/forest/scene.gltf',
  ) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-16.21, -8.84, 0]}
          rotation={[0, 0, 2.557]}
          scale={2.578}
        >
          <primitive object={nodes.GolemArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.Golem_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Golem_0.skeleton}
          />
        </group>
        <group
          position={[39.471, 14.046, 0]}
          rotation={[0, 0, 1.463]}
          scale={1.323}
        >
          <primitive object={nodes.TreeantArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.Treeant_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Treeant_0.skeleton}
          />
        </group>
        <group position={[33.014, -28.21, 0]} rotation={[0, 0, 0.151]}>
          <primitive object={nodes.MushroomManArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.MushroomMan_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.MushroomMan_0.skeleton}
          />
        </group>
        <group position={[14.171, 14.215, 0]} rotation={[0, 0, -2.549]}>
          <primitive object={nodes.MushroomBoyArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.MushroomBoy_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.MushroomBoy_0.skeleton}
          />
        </group>
        <group
          position={[31.296, -28.545, 0]}
          rotation={[0, 0, 0.45]}
          scale={0.223}
        >
          <primitive object={nodes.WandererArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.Wanderer_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Wanderer_0.skeleton}
          />
        </group>
        <group position={[11.944, 15.457, 0]} rotation={[0, 0, 0.838]}>
          <primitive object={nodes.WandererSonArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.WandererSon_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.WandererSon_0.skeleton}
          />
        </group>
        <group
          position={[-13.225, -7.986, 7.054]}
          rotation={[0.063, 0.075, 2.445]}
        >
          <primitive object={nodes.BearArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.Bear_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Bear_0.skeleton}
          />
        </group>
        <group position={[2.843, 38.432, 0]} rotation={[0, 0, -3.021]}>
          <primitive object={nodes.OgreArmature001_rootJoint} />
          <skinnedMesh
            geometry={nodes.Ogre001_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Ogre001_0.skeleton}
          />
        </group>
        <group position={[40.189, 3.398, 0.017]} rotation={[0, 0, 2.133]}>
          <primitive object={nodes.GolemArmature001_rootJoint} />
          <skinnedMesh
            geometry={nodes.Golem001_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Golem001_0.skeleton}
          />
        </group>
        <group position={[-27.769, 5.572, 3.494]} rotation={[0, 0, 1.912]}>
          <primitive object={nodes.BearArmature002_rootJoint} />
          <skinnedMesh
            geometry={nodes.Bear002_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Bear002_0.skeleton}
          />
        </group>
        <group position={[-8.305, 3.785, 0]} rotation={[0, 0, -0.604]}>
          <primitive object={nodes.TreeantArmature001_rootJoint} />
          <skinnedMesh
            geometry={nodes.Treeant001_0.geometry}
            material={materials['Fairy03.001_0']}
            skeleton={nodes.Treeant001_0.skeleton}
          />
        </group>
        <group position={[13.451, 16.471, 0]}>
          <primitive object={nodes.FaunArmature_rootJoint} />
          <skinnedMesh
            geometry={nodes.Faun_0.geometry}
            material={materials.Material}
            skeleton={nodes.Faun_0.skeleton}
          />
        </group>
        <mesh
          geometry={nodes.Flute_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[13.479, 16.425, 1.468]}
          rotation={[0, 1.14, -1.497]}
          scale={0.351}
        />
        <mesh
          geometry={nodes.RabbitPink_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-17.61, 44.762, 21.257]}
          rotation={[0, 0, 1.329]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.SmallBench_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[31.551, -17.518, 0]}
          rotation={[0, 0, -0.24]}
          scale={0.684}
        />
        <mesh
          geometry={nodes.Bench_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[29.229, -22.501, 0.573]}
          rotation={[0, 0, -0.717]}
          scale={0.539}
        />
        <mesh
          geometry={nodes.Table_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[29.978, -20.399, 1.422]}
          rotation={[0, 0, -0.774]}
          scale={0.872}
        />
        <mesh
          geometry={nodes.Campfire_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[24.891, -14.986, 0]}
          scale={0.357}
        />
        <mesh
          geometry={nodes.DrinkMug_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[30.219, -21.441, 1.987]}
          rotation={[0, 0, -0.24]}
          scale={0.176}
        />
        <mesh
          geometry={nodes.Grog_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[31.039, -20.208, 2.151]}
          rotation={[0, 0, -0.24]}
        />
        <mesh
          geometry={nodes.BoozeBottle_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[30.995, -21.217, 2.188]}
          rotation={[0, 0, -0.24]}
        />
        <mesh
          geometry={nodes.Wizard_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[48.187, 11.33, 2.622]}
          rotation={[0, 0, 1.619]}
          scale={0.253}
        />
        <mesh
          geometry={nodes.WizardStaff_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[48.535, 11.765, 1.535]}
          rotation={[0, 0, 0.834]}
          scale={0.187}
        />
        <mesh
          geometry={nodes.Fairy01_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-12.837, 2.61, 5.86]}
          rotation={[0, 0, 0.335]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Bush_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-6.917, 39.162, 0]}
        />
        <mesh
          geometry={nodes.EvilPortal_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-0.135, 38.439, 3.1]}
          rotation={[Math.PI / 2, 0.533, 0]}
        />
        <mesh
          geometry={nodes.Barrel_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[21.548, -18.792, 1.157]}
          rotation={[0, 0, -1.954]}
        />
        <mesh
          geometry={nodes.EvilLord_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[24.014, 27.947, 1.19]}
          rotation={[0, 0, 0.555]}
          scale={0.253}
        />
        <mesh
          geometry={nodes.Pine01_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-24.619, -16.596, 1.61]}
          rotation={[0, 0, 1.239]}
          scale={1.756}
        />
        <mesh
          geometry={nodes.Tree01_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-37.558, 11.55, 0]}
          rotation={[0, 0, -1.973]}
          scale={1.084}
        />
        <mesh
          geometry={nodes.FlowerYellow_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[4.704, 9.688, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.RabbitWhite_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[10.037, 13.177, 0]}
          rotation={[0, 0, 2.884]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.Fairy04_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[1.541, 27.094, 2.456]}
          rotation={[0, 0, 2.961]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Fairy02_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-14.93, 2.661, 3.593]}
          rotation={[0, 0, 0.403]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Fairy03_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[12.899, 11.303, 2.457]}
          rotation={[0, 0, -2.843]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Ogre_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-2.578, 28.326, 0]}
          rotation={[0, 0, 2.773]}
          scale={0.679}
        />
        <mesh
          geometry={nodes.Club_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-2.764, 25.903, 7.781]}
          rotation={[-1.831, 0.367, 1.124]}
        />
        <mesh
          geometry={nodes.Pine03_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[51.968, -5.422, 1.61]}
          scale={1.303}
        />
        <mesh
          geometry={nodes.Pine04_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[37.968, 26.932, 1.61]}
          scale={1.756}
        />
        <mesh
          geometry={nodes.KingdomOrb_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[60.331, 14.097, 7.607]}
          rotation={[0.016, 0.039, -1.515]}
          scale={4.084}
        />
        <mesh
          geometry={nodes.SkeletonSoldier_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[21.596, 27.991, 0]}
          rotation={[0, 0, 0.653]}
        />
        <mesh
          geometry={nodes.Butterfly02_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[11.137, 13.724, 1.551]}
          rotation={[-0.154, 0.153, 2.365]}
          scale={0.125}
        />
        <mesh
          geometry={nodes.NightMare_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.015, 33.981, 1.026]}
          rotation={[0, 0, -1.808]}
          scale={0.309}
        />
        <mesh
          geometry={nodes.StonehengeOrb_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[52.138, 18.338, 8.151]}
          rotation={[0.016, 0.039, -1.047]}
          scale={2.763}
        />
        <mesh
          geometry={nodes.VulcanoOrb_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[55.459, 15.105, 3.826]}
          rotation={[0.016, 0.039, -1.515]}
          scale={1.577}
        />
        <mesh
          geometry={nodes.Tree03_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-15.33, 46.882, 0]}
          rotation={[0, 0, 0.728]}
          scale={1.221}
        />
        <mesh
          geometry={nodes.Rock_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-0.338, 19.867, 0]}
          scale={0.313}
        />
        <mesh
          geometry={nodes.JapaneseOrb_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[55.415, 3.295, 4.664]}
          rotation={[0.016, 0.039, -2.438]}
          scale={3}
        />
        <mesh
          geometry={nodes.DarkRealmOrb_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[60.233, 6.188, 11.861]}
          rotation={[0.016, 0.039, -1.967]}
          scale={4.227}
        />
        <mesh
          geometry={nodes.Land_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[0, 0, 0.021]}
          scale={0.532}
        />
        <mesh
          geometry={nodes.Bush001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-23.762, 9.697, 0]}
        />
        <mesh
          geometry={nodes.EvilLordStaff_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[23.91, 27.1, 1]}
          rotation={[0, 0, -0.23]}
        />
        <mesh
          geometry={nodes.Well_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-22.926, 17.982, 0]}
          scale={0.485}
        />
        <mesh
          geometry={nodes.Bucket_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-22.785, 15.59, 0]}
          scale={0.37}
        />
        <mesh
          geometry={nodes.Rock3_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-13.601, 25.065, 0.317]}
          rotation={[0.408, 0.147, 2.384]}
          scale={[4.185, 3.026, 3.026]}
        />
        <mesh
          geometry={nodes.PipeFlute_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[12.249, 15.192, 1.073]}
          rotation={[-Math.PI / 2, -0.856, 0]}
        />
        <mesh
          geometry={nodes.Circle_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[53.899, 12.075, 1.325]}
          rotation={[0, 0, -0.078]}
          scale={6.041}
        />
        <mesh
          geometry={nodes.Tree03001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[13.744, 23.815, 0]}
          rotation={[0, 0, 1.733]}
          scale={0.897}
        />
        <mesh
          geometry={nodes.Pine05001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[18.214, 47.442, 1.61]}
          rotation={[0, 0, -0.19]}
          scale={1.756}
        />
        <mesh
          geometry={nodes.Pine05002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-28.245, 25.098, 1.61]}
          rotation={[0, 0, -0.19]}
          scale={1.833}
        />
        <mesh
          geometry={nodes.Bush003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-30.626, 14.457, 0]}
          rotation={[0, 0, 1.377]}
          scale={1.249}
        />
        <mesh
          geometry={nodes.Tree02002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-1.525, 49.593, 0]}
          rotation={[0, 0, -1.274]}
          scale={1.015}
        />
        <mesh
          geometry={nodes.Pine03002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[45.078, -16.652, 1.61]}
          scale={1.862}
        />
        <mesh
          geometry={nodes.Bush004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[42.143, -7.665, 0]}
          scale={1.325}
        />
        <mesh
          geometry={nodes.Pine02002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[18.021, -27.913, 1.61]}
          scale={1.979}
        />
        <mesh
          geometry={nodes.Pine02003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[6.344, -15.329, 1.61]}
          scale={2.102}
        />
        <mesh
          geometry={nodes.Pine01002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-9.289, -20.824, 0.698]}
          rotation={[0, 0, 1.239]}
          scale={2.404}
        />
        <mesh
          geometry={nodes.Pine01003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-30.772, -2.426, 1.61]}
          rotation={[0, 0, 1.239]}
          scale={1.452}
        />
        <mesh
          geometry={nodes.Tree01003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[4.298, 9.488, 0]}
          rotation={[0, 0, -1.467]}
          scale={1.142}
        />
        <mesh
          geometry={nodes.Bush006_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-12.267, -17.175, 0]}
          rotation={[0, 0, 1.377]}
          scale={1.249}
        />
        <mesh
          geometry={nodes.Bush007_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-24.877, -7.28, 0]}
          rotation={[0, 0, -2.54]}
          scale={1.518}
        />
        <mesh
          geometry={nodes.Tree03003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-18.36, 32.113, 0]}
          rotation={[0, 0, 0.025]}
          scale={0.794}
        />
        <mesh
          geometry={nodes.Tree02004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[23.432, 11.598, 0]}
          rotation={[0, 0, 0.342]}
          scale={1.115}
        />
        <mesh
          geometry={nodes.Pine04001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[29.53, 38.57, 1.61]}
          scale={2.099}
        />
        <mesh
          geometry={nodes.EvilPortal001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[15.565, 39.751, 5.232]}
          rotation={[Math.PI / 2, -0.177, 0]}
          scale={1.183}
        />
        <mesh
          geometry={nodes.SkeletonSoldier001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[24.305, 30.29, 0]}
          rotation={[0, 0, 0.899]}
        />
        <mesh
          geometry={nodes.NightMare001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[22.453, 31.235, 1.685]}
          rotation={[0, 0, 0.709]}
          scale={0.309}
        />
        <mesh
          geometry={nodes.NightMare002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[19.757, 31.641, 1.685]}
          rotation={[0, 0, 0.709]}
          scale={0.309}
        />
        <mesh
          geometry={nodes.Unicorn001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[12.045, 11.784, 1.026]}
          rotation={[0, 0, 2.82]}
          scale={0.309}
        />
        <mesh
          geometry={nodes.Unicorn002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[39.142, 8.445, 1.026]}
          rotation={[0, 0, 1.648]}
          scale={0.309}
        />
        <mesh
          geometry={nodes.Bush008_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.966, 47.328, 0]}
          rotation={[0, 0, 1.377]}
          scale={1.249}
        />
        <mesh
          geometry={nodes.TreeTrunk002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-28.106, 5.619, 2.434]}
          rotation={[0, 0, -1.984]}
          scale={1.425}
        />
        <mesh
          geometry={nodes.TreeTrunk003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[14.313, 3.472, 0.857]}
          rotation={[0, 0, -1.758]}
          scale={0.992}
        />
        <mesh
          geometry={nodes.TreeTrunk004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-9.888, 34.542, 0.857]}
          rotation={[0, 0, 2.899]}
          scale={1.195}
        />
        <mesh
          geometry={nodes.SmallBench001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[33.701, -21.041, 0]}
          rotation={[0, 0, -0.24]}
          scale={0.684}
        />
        <mesh
          geometry={nodes.Bush009_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[2.216, 12.4, 0]}
        />
        <mesh
          geometry={nodes.Bush010_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[16.954, 23.614, -0.492]}
          rotation={[0, 0, 1.133]}
        />
        <mesh
          geometry={nodes.Bush012_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[22.934, 13.309, -0.492]}
          rotation={[0, 0, 1.924]}
        />
        <mesh
          geometry={nodes.Bush013_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[27.486, 11.46, -0.492]}
          rotation={[0, 0, 1.924]}
        />
        <mesh
          geometry={nodes.DrinkMug001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[32.155, -21.153, 1.987]}
          rotation={[0, 0, -0.24]}
          scale={0.176}
        />
        <mesh
          geometry={nodes.Grog001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[31.442, -21.641, 2.151]}
          rotation={[0, 0, -0.24]}
        />
        <mesh
          geometry={nodes.Barrel002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[23.189, -20.983, 1.157]}
        />
        <mesh
          geometry={nodes.RabbitPink001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[33.911, -27.961, 0]}
          rotation={[0, 0, 0.829]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitPink002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-7.817, 4.275, 7.199]}
          rotation={[0, 0, -0.121]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitPink003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-19.31, -5.319, 8.433]}
          rotation={[-0.114, -0.162, 2.893]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitPink005_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[51.951, 3.686, 1.779]}
          rotation={[0, 0, 2.075]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitPink006_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[15.947, 15.481, 0]}
          rotation={[0, 0, -0.894]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitPink007_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[11.061, 13.143, 0]}
          rotation={[0, 0, 2.593]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitPink008_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[17.475, 24.345, 2.167]}
          rotation={[0, 0, 2.979]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitPink009_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[60.137, 5.837, 12.214]}
          rotation={[0, 0, 1.517]}
          scale={0.032}
        />
        <mesh
          geometry={nodes.Rock002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[7.507, 8.836, 0]}
          rotation={[0, 0, 2.587]}
          scale={0.76}
        />
        <mesh
          geometry={nodes.Rock003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[6.312, 19.246, 0]}
          rotation={[0, 0, -2.617]}
          scale={0.76}
        />
        <mesh
          geometry={nodes.Rock004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[21.404, 19.645, 0]}
          rotation={[0, 0, -1.891]}
          scale={0.76}
        />
        <mesh
          geometry={nodes.Rock005_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[40.841, 18.497, 0]}
          rotation={[0, 0, 0.419]}
          scale={0.76}
        />
        <mesh
          geometry={nodes.Rock006_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[46.239, 11.4, 0]}
          rotation={[0, 0, 1.602]}
          scale={1.128}
        />
        <mesh
          geometry={nodes.Rock007_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[45.547, 11.679, -0.453]}
          rotation={[0, 0, 1.602]}
          scale={1.128}
        />
        <mesh
          geometry={nodes.Rock010_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[34.82, -11.171, 0]}
          rotation={[0, 0, 0.475]}
          scale={1.023}
        />
        <mesh
          geometry={nodes.Rock011_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[37.415, -27.89, 0]}
          rotation={[0, 0, 0.475]}
          scale={1.023}
        />
        <mesh
          geometry={nodes.Rock3001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[9.331, 23.643, 0.317]}
          scale={[2.13, 1.54, 1.54]}
        />
        <mesh
          geometry={nodes.Grass002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.887, 13.471, 0]}
          rotation={[0, 0, -1.292]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[15.373, 13.291, 0]}
          rotation={[0, 0, -1.169]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass005_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[15.133, 16.734, 0]}
          rotation={[0, 0, -0.437]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass008_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.778, 19.893, 0]}
          rotation={[0, 0, 1.476]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass011_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[4.904, 14.566, 0]}
          rotation={[0, 0, 1.646]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass013_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[13.795, 4.863, 0]}
          rotation={[0, 0, -2.505]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass014_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[18.743, 7.313, 0]}
          rotation={[0, 0, -2.505]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass017_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[10.852, 15.433, 0]}
          rotation={[0, 0, -0.539]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass019_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[2.946, 11.503, 0]}
          rotation={[0, 0, 1.516]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass020_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[4.218, 16.877, 0]}
          rotation={[0, 0, 1.516]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass025_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[18.991, 11.147, 0]}
          rotation={[0, 0, -0.787]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass028_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[12.504, 8.271, 0]}
          rotation={[0, 0, -2.7]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass030_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[14.117, 10.938, 0]}
          rotation={[0, 0, 1.821]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass032_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[13.341, 18.471, 0]}
          rotation={[0, 0, -0.364]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass033_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[18.21, 15.12, 0]}
          rotation={[0, 0, -1.46]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass035_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[11.864, 10.988, 0]}
          rotation={[0, 0, 0.725]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass037_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.755, 11.204, 0]}
          rotation={[0, 0, 2.487]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass044_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[18.305, 18.717, 0]}
          rotation={[0, 0, -0.766]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass049_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[10.25, 14.031, 0]}
          rotation={[0, 0, 0.628]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass051_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[10.754, 5.217, 0]}
          rotation={[0, 0, 2.682]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass057_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[17.391, 19.828, 0]}
          rotation={[0, 0, 0.38]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass060_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[17.484, 12.733, 0]}
          rotation={[0, 0, -1.534]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass064_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.435, 17.514, 0]}
          rotation={[0, 0, 0.803]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass111_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[26.28, 15.688, 0.002]}
          rotation={[0, 0, -2.452]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass113_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[0.578, 16.287, 0.002]}
          rotation={[0, 0, -1.589]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass124_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[4.801, 6.964, 0.002]}
          rotation={[0, 0, -0.017]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.Grass128_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[6.491, 5.32, 0.002]}
          rotation={[0, 0, 0.162]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.FlowerWhite006_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.493, 17.083, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerWhite010_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[18.005, 16.674, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerWhite015_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[6.812, 12.495, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerWhite016_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[15.445, 7.929, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerWhite017_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[10.091, 8.095, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerWhite037_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[21.699, 22.299, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[5.815, 6.685, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[10.85, 17.944, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[14.887, 20.444, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow006_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[16.71, 14.272, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.Grass012_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[7.429, 7.337, 0]}
          rotation={[0, 0, 2.593]}
          scale={0.353}
        />
        <mesh
          geometry={nodes.FlowerYellow007_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[13.767, 12.293, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow009_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[2.802, 16.355, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow010_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[4.209, 21.017, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow011_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[17.332, 9.892, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow013_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[11.985, 6.382, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow014_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[17.602, 4.708, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.FlowerYellow021_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[45.485, 8.963, 0]}
          rotation={[0, -0.092, 0]}
          scale={0.127}
        />
        <mesh
          geometry={nodes.Mushroom001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[6.841, 19.934, 0]}
          scale={1.066}
        />
        <mesh
          geometry={nodes.Mushroom002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[20.827, 20.585, 0]}
          scale={1.066}
        />
        <mesh
          geometry={nodes.Mushroom004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[6.945, 8.501, 0]}
          scale={1.066}
        />
        <mesh
          geometry={nodes.Mushroom005_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[33.914, -12.496, 0]}
          scale={1.066}
        />
        <mesh
          geometry={nodes.Mushroom006_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[20.756, -14.083, 0]}
          scale={1.066}
        />
        <mesh
          geometry={nodes.RabbitWhite002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[40.867, 18.422, 0.641]}
          rotation={[0, 0, 1.438]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.RabbitWhite003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[20.637, 22.114, 0]}
          rotation={[0, 0, -2.781]}
          scale={0.395}
        />
        <mesh
          geometry={nodes.Butterfly02001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[15.116, 14.93, 1.083]}
          rotation={[-0.056, -0.21, -1.835]}
          scale={0.125}
        />
        <mesh
          geometry={nodes.Butterfly02002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[11.287, 17.401, 1.551]}
          rotation={[0.171, 0.134, 0.66]}
          scale={0.125}
        />
        <mesh
          geometry={nodes.Butterfly02003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[21.301, 25.202, 1.551]}
          rotation={[-0.207, 0.066, 2.837]}
          scale={[0.125, 0.126, 0.125]}
        />
        <mesh
          geometry={nodes.Butterfly02004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[49.665, 12.257, 2.362]}
          rotation={[-0.037, 0.18, -0.237]}
          scale={0.125}
        />
        <mesh
          geometry={nodes.Butterfly02005_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-6.976, -2.513, 2.362]}
          rotation={[0.093, 0.159, -0.974]}
          scale={0.125}
        />
        <mesh
          geometry={nodes.Butterfly01001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[8.811, 12.164, 0.386]}
          rotation={[0, 0, 1.975]}
          scale={[0.125, 0.125, 0.126]}
        />
        <mesh
          geometry={nodes.Butterfly01002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[12.709, 18.304, 0.386]}
          rotation={[0, 0, 0.089]}
          scale={[0.125, 0.125, 0.126]}
        />
        <mesh
          geometry={nodes.Butterfly01003_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[3.717, 24.095, 0.386]}
          rotation={[0, 0, -2.757]}
          scale={[0.125, 0.125, 0.126]}
        />
        <mesh
          geometry={nodes.Butterfly01004_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-13.531, 4.476, 0.386]}
          rotation={[0, 0, 0.093]}
          scale={[0.125, 0.125, 0.126]}
        />
        <mesh
          geometry={nodes.Butterfly01005_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[-21.308, 19.746, 0.386]}
          rotation={[0, 0, 0.334]}
          scale={[0.125, 0.125, 0.126]}
        />
        <mesh
          geometry={nodes.Butterfly01006_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[29.176, -25.822, 0.386]}
          rotation={[0, 0, 0.334]}
          scale={[0.125, 0.125, 0.126]}
        />
        <mesh
          geometry={nodes.Fairy01001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[14.761, 14.823, 1.077]}
          rotation={[0, 0, -2.111]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Fairy04001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[48.597, 4.313, 4.31]}
          rotation={[0, 0, 2.053]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Fairy04002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[32.1, -27.676, 4.311]}
          rotation={[0, 0, 0.315]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Rock2001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[44.665, -3.698, 0.325]}
          rotation={[-0.38, -0.35, 0]}
          scale={[2.625, 1.898, 1.898]}
        />
        <mesh
          geometry={nodes.Rock2002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[15.887, -6.679, 0.325]}
          rotation={[1.8, -0.607, -0.248]}
          scale={[2.625, 1.898, 1.898]}
        />
        <mesh
          geometry={nodes.Fairy02001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[10.808, 13.998, 0.847]}
          rotation={[0, 0, 1.875]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Fairy02002_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[24.774, 31.456, 2.457]}
          rotation={[0, 0, -0.159]}
          scale={0.329}
        />
        <mesh
          geometry={nodes.Fairy03001_0.geometry}
          material={materials['Fairy03.001_0']}
          position={[3.901, 29.403, 2.457]}
          rotation={[0, 0, -2.691]}
          scale={0.329}
        />
      </group>
    </group>
  )
}

const Forest = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [100, 0, 0],
      }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight />
        <spotLight
          intensity={2}
          angle={2}
          penumbra={1}
          position={[0, 0, 0]}
          castShadow
        />
        <Model />
        <OrbitControls enablePan enableZoom enableRotate />
      </Suspense>
    </Canvas>
  )
}

export default Forest
