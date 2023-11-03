<?php

namespace App\Http\Controllers;

use App\Http\Resources\DiagnoseCollection;
use App\Models\Diagnose;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DiagnoseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $diseasesDataDB = Diagnose::all();
        // dd($diseasesDataDB);
        return Inertia::render('Chats',[
            'diseasesDataDB' => $diseasesDataDB,
        ]);
  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {



        $fileName = $request->disease. '-' .time() . '.' . $request->image->getClientOriginalExtension();
        $request->image->storeAs('public/images/diseases', $fileName);
        
        $diagnose = new Diagnose();
        $diagnose->image =$fileName;
        $diagnose->disease = $request->disease;
        $diagnose->desc = $request->desc;
        $diagnose->symptom = $request->symptom;
        $diagnose->treatment = $request->treatment;
        $diagnose->save();

        return redirect()->route('dashboard')->with('success', 'Data berhasil ditambahkan');
        // return redirect()->back()->with('success', 'sip sukses');
    }

    /**
     * Display the specified resource.
     */
    public function show(Diagnose $diagnose)
    {
        $diagnose = new DiagnoseCollection(Diagnose::paginate(12));
        return Inertia::render('Dashboard',[
            'diseasesDataDB' => $diagnose,
        ]);

    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Diagnose $diagnose)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $diagnose = Diagnose::find($request->id);

        $fileName = '';

        if ($request->hasFile('image')) {
            $fileName = $request->disease. '-' .time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->storeAs('public/images/diseases', $fileName);
          if ($diagnose->image) {
            Storage::delete('public/images/diseases/' . $diagnose->image);
          }
        } else {
          $fileName = $diagnose->image;
        }

        $diagnose->image =$fileName;
        $diagnose->disease = $request->disease;
        $diagnose->desc = $request->desc;
        $diagnose->symptom = $request->symptom;
        $diagnose->treatment = $request->treatment;
        $diagnose->save();

        return redirect()->back()->with('success', 'Data berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
// dd($request);
        if($request->image){
            Storage::delete('public/images/diseases/' . $request->image);
        }
        $data = Diagnose::find($request->id);
        $data->delete();

        return redirect()->back()->with('success', 'deleted successfully');
    }
}